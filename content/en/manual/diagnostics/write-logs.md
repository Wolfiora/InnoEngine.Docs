---
title: Write and retain logs
description: Emit script logs, select host delivery, handle backpressure and close owned sinks safely.
uid: manual.diagnostics.write-logs
kind: how-to
owners:
  - Inno.Core.Logging
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Core.Logging
---
# Write and retain logs

Write a log for something that happened: an action, a diagnostic transition or an exception's details. Publish a [current diagnostic](report-current-issues.md) separately when the condition remains active and can later recover. Resolving that diagnostic does not erase its log history.

## Emit from a project script

The host must bind its router to the executing session. The real Runtime script projection exposes `Log` and `LogSessionId` under `InnoEngine.Logging`; scripts do not construct the host router or its sinks.

```csharp
using InnoEngine.Logging;

public static class HealthReporter
{
    public static void ReportHealth(float health)
    {
        Log.Info(typeof(HealthReporter), "Health updated: {0}", [health]);
        if (health < 10f)
            Log.Warn(typeof(HealthReporter), "Health is low: {0}", [health]);
    }
}
```

The explicit source type supplies assembly domain/scope metadata. A null type fails; an enabled message from an unclassified assembly also fails. Pass the source type that actually owns the message rather than inspecting an arbitrary runtime caller.

Format arguments use a collection and composite formatting. Invalid format strings fail on the producer's side. Treat untrusted text as data rather than a format template. `Debug` calls are removed by compilation when `DEBUG` is absent; runtime filtering cannot restore them.

## Choose host delivery

The host owns `LogRouter` and its registered sinks. It chooses `Background` delivery on the router's worker or `Inline` delivery on the calling thread. `EngineHostBuilder.UseLogDelivery` selects this policy at host composition; it is not a platform test inside the logging core.

Both modes serialize delivery and preserve sink ordering. A sink that writes another log queues it until the current entry has reached all sinks; it does not recursively invoke itself. Callbacks must not call their own router's `Flush` or `Dispose`, which would wait for their own completion and therefore throw.

## Handle pressure and shutdown

The default queue capacity is 65,536 entries/barriers, with a 4,096-item drain budget per sink snapshot. `TryDispatch` returns false when the bounded queue is full. It returns true both for an accepted entry and for an entry filtered out by policy, so true does not mean a sink necessarily received it. `Dispatch` throws on rejection.

`Flush` inserts a barrier and waits for earlier queued entries to reach the delivery snapshot. A full queue can reject the barrier; the caller must retry after progress or report failure. Flush is a low-frequency lifecycle operation, not a per-message performance primitive.

External `Dispose` stops admission, drains accepted work and disposes sinks still registered with the router, collecting disposal failures. Unregistered or quarantined sinks are not in that final collection; their host owner must coordinate safe release after in-flight callbacks finish. Unregistering changes later snapshots and is not a callback-join operation.

## Retain file logs

`FileLogSink` uses a single synchronized writer; it does not add a second queue or worker. Its defaults are 10 MiB per file and ten retained files. Files use `log_<UTC timestamp>_<unique ID>.log` and exclusive creation to avoid collisions between sinks or rapid rotation.

The sink rotates before the next entry would exceed the size budget. A single oversized entry stays complete in its own file and may exceed that budget. Retention includes the current file, preserves locked active writers and retries later. It is best-effort when permissions or filesystem locking prevent removal.

Write, flush, create and close failures propagate to the router's sink-failure policy. Reading an active file requires compatible `FileShare.ReadWrite`. A successful file flush is not a promise of durability after power loss. Browser file logs live in that session's virtual filesystem; [application storage](../storage/save-data.md) owns persistence across refreshes.

## Handle failed sinks

A failing sink is removed from delivery and reported through `sinkFailed`. Other sinks and independent failure observers continue. Logging's secondary stderr fallback is protected so a broken reporting channel cannot terminate healthy log delivery.

The host still owns recovery and release of a quarantined sink. Do not blindly re-register a broken sink or dispose resources while its callback is active. For current diagnostics projected into logs, dispose `DiagnosticLogSink` before the borrowed diagnostic hub/router retire.

## Console and source context

`ConsoleLogSink` defaults to plain text. A host explicitly requests terminal colors when supported; redirected output remains plain text. This terminal sink is separate from [Editor Console styling](../../extending/customize-console.md).

Entries retain neutral text, severity, assembly domain/scope, category, source location, stack text and session identity. The script facade uses the compiler-provided source filename as its category; a logger returned by `CreateLogger<TOwner>()` uses its owner type's name. Entries do not keep the source `Type` or `Assembly` alive. Stack detail depends on the runtime and available symbols.

[Logging contracts](../../api/projects/inno-core-logging.md) describe exact members, session scopes and sink lifetime.
