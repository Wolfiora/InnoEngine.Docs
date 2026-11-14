---
uid: api.ba343286804f359bcd27a91c543af5e3b28966989885584af66141b7b4198f11
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: bab6ff64e1b191241460aadf0d64881483d34777dd4895f4e1ddc9ffe0b344ca
title: "ToolchainEnvironment.CaptureOutputAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures a tool's standard output while forwarding errors and preserving the common process lifecycle.

## Parameters

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** Structured arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The directory used for project and SDK resolution.

**Parameter `cancellationToken`:** Cancels the child process tree and waits for its complete exit.

**Parameter `environment`:** Optional child-only environment variables. Null values remove inherited variables; empty values remain explicitly empty.

## Returns

The complete standard output after successful exit. Unsuccessful exits retain captured output in the exception.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The tool fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.
