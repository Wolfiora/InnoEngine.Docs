---
title: Inno.Core.Logging
description: Bounded append-only logging, explicit delivery policy, failure quarantine and host-owned sinks.
uid: project.inno-core-logging
kind: project
owners:
  - Inno.Core.Logging
---
# Inno.Core.Logging

This project owns append-only log delivery for one host. The host explicitly creates its `LogRouter`, sink collection and execution scopes. Start with [write and retain logs](../../manual/diagnostics/write-logs.md); [current diagnostics](inno-core-diagnostics.md) remain a separate state model.

## Delivery and ownership contract

The router owns one bounded queue, severity policy and delivery executor. `Background` uses its worker; `Inline` serializes delivery on the calling thread. A drain batch retains one sink snapshot. Reentrant writes enqueue behind the current entry rather than recursively invoking callbacks. Positive capacity/drain budgets and a defined delivery mode are required.

`TryDispatch` returns true for accepted or policy-filtered entries and false for exhausted capacity. `Flush` needs capacity for its barrier and waits for earlier work; it is forbidden within that router's delivery callback. Disposal is also forbidden there. External disposal drains work and releases disposable sinks still registered, preserving aggregate failures.

Registering a sink avoids duplicate registration. Unregistration and quarantine remove it from later snapshots without disposing it or joining a currently active callback. The host must retain enough ownership to safely release removed sinks. Do not interpret removal as proof that an in-flight snapshot no longer borrows the sink.

## Context and surfaces

`LogRouter.EnterScope` supplies the current asynchronous execution flow with a borrowed router; dispose scopes in reverse order. `LogSessionContext.Enter` separately binds a nonempty `LogSessionId`, restoring the previous session on disposal. `none` represents process-level work, not an assigned session.

`Log` and `LogSessionId` are actual Runtime script exports. Router construction, sinks, delivery policy and host session-context binding are not script exports. `Log` resolves source assembly classification from an explicit caller type; emitted entries retain neutral values rather than that type or assembly. `Logger` provides a host category-bound writer.

## Sinks and diagnostics

`ConsoleLogSink` defaults to `useColors: false`; capability selection belongs to the host. `FileLogSink` owns one writer with complete-entry rotation and best-effort retention. Its flush does not promise power-loss durability. Both use the same router delivery/failure protocol.

`DiagnosticLogSink` borrows a `DiagnosticHub` and router, registers for current and future complete reports, and logs only new or changed issues. Issue removal clears its de-duplication state; it does not delete prior log entries. Dispose it to unregister and release that state before its borrowed dependencies retire.

The detailed task guide covers file sharing, oversized entries, retained active writers, producer-side formatting errors, compile-time Debug removal and protected secondary failure reporting.

## Reference

[Browse exact router, logger, session and sink declarations](../types/core-logging/index.md).
