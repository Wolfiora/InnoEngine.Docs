---
uid: api.603c233bda6c2b48b51dddc781f208a78da3373f6335c532b582434a590c2d7c
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.IManagedDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest,System.Threading.CancellationToken)"
source: xml
reviewed: cbd945e2edeb3a8455eb0c402589f7ae5197e41e2ee3262a703e978b14b70167
title: "IManagedDeploymentCompiler.CompileAsync"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Compiles or publishes the prepared code closure into isolated managed staging.

## Parameters

**Parameter `request`:** The immutable prepared project, target, frozen inputs and staging locations.

**Parameter `cancellationToken`:** Cancels the publisher and waits for its process tree and output readers to retire.

## Returns

Verified output evidence; failed or canceled publication never returns a successful result.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The target is unsupported, required toolchain inputs are absent, or publication fails.

**Exception `T:System.OperationCanceledException`:** Publication was canceled and all owned work has stopped.
