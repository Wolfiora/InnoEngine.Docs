---
uid: api.065e6c698914c3118135fbf868f3af2fc610a91712862e67d298556edc552d6f
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 93646038805be7d93bde8e06058d527208ebdf733bacba43274fb565c62dc6b7
title: "ToolchainEnvironment.RunAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Runs a quoted host command with a frozen compiler and SDK environment.

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
