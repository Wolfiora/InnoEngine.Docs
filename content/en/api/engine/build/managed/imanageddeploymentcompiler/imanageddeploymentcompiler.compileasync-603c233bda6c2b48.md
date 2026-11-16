---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.603c233bda6c2b48b51dddc781f208a78da3373f6335c532b582434a590c2d7c
symbol: engine:Inno.Build.Managed:M:Inno.Build.Managed.IManagedDeploymentCompiler.CompileAsync(Inno.Build.Managed.ManagedDeploymentRequest,System.Threading.CancellationToken)
title: IManagedDeploymentCompiler.CompileAsync
kind: api
owners:
- Inno.Build.Managed
apiSurface: source-clr
reviewed: c1c66a61e0634d462880c4f4a7df041b6b8406607e6037e672dfe96114235109
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `request`:** The immutable prepared project, target, frozen inputs and staging locations.

**Parameter `cancellationToken`:** Cancels the publisher and waits for its process tree and output readers to retire.

## Returns

Verified output evidence; failed or canceled publication never returns a successful result.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The target is unsupported, required toolchain inputs are absent, or publication fails.

**Exception `T:System.OperationCanceledException`:** Publication was canceled and all owned work has stopped.
