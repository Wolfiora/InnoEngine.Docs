---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.065e6c698914c3118135fbf868f3af2fc610a91712862e67d298556edc552d6f
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String,System.String,System.Threading.CancellationToken)
title: ToolchainEnvironment.RunAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: ce2ebb575b4f4e01f34ca8896190f12bc172ce81adde530bca71166afb211a9d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The context resolved before artifact fingerprinting.

**Parameter `fileName`:** A selected command or an absolute executable declared in the component inputs.

**Parameter `arguments`:** Arguments quoted for the selected executable's command-line parser.

**Parameter `workingDirectory`:** The operation's source snapshot or intermediate directory.

**Parameter `cancellationToken`:** Cancels and retires the complete process tree.

## Returns

Completion after the command exits successfully and its streams drain.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Tools are unresolved or execution fails.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.
