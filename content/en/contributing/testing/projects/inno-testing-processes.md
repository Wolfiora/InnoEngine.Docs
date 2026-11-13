---
title: Isolated contract process host
description: Run a prepared test contract with complete diagnostics and owned process cleanup.
uid: project.inno-testing-processes
kind: project
owners: [Inno.Testing.Processes]
exampleMode: host
exampleProjects: [Inno.Testing.Processes]
---
# Isolated contract process host

`Inno.Testing.Processes` provides a BCL-only synchronous process boundary for tests. Consumers reference this shared implementation instead of copying process code. It does not generate bindings, prepare native products or become a production dependency.

## Run a prepared contract

Build and deploy the actual contract assembly first. The directory below must be absolute and contain the prepared executable assembly:

```csharp
using System.IO;
using Inno.Testing.Processes;

static void RunWindowContract(string directory)
{
    NativeProcessTestHost.Run(
        Path.Combine(directory, "ContractHost.dll"),
        "window-lifecycle");
}
```

The host selects `DOTNET_HOST_PATH` when supplied, otherwise `dotnet`. GPU and window-thread responsibilities remain in the child contract. The process host does not manufacture a valid deployment or assume Cocoa ownership for an ordinary worker.

## Completion and failure

The default test-contract budget is 90 seconds. A successful return requires exit code zero and both output streams fully closed. A nonzero exit or failure to drain output throws `InvalidOperationException`. Relative assembly paths, empty contract names and nonpositive budgets are rejected.

Timeout terminates the owned process tree, waits up to ten seconds for exit and up to five seconds for output draining, then throws `TimeoutException` with command, PID, duration, captured output and cleanup results. This is the explicit isolated test contract's budget, not a universal native-build deadline.

The host retains no plugin types, generation objects or callbacks after the synchronous call. [Process-host tests](inno-testing-processes-tests.md) verify success, partial failure and descendant cleanup.

## API reference

[Types and exact member contracts](inno-testing-processes.md). These declarations describe this support library, not a product or script API surface.
