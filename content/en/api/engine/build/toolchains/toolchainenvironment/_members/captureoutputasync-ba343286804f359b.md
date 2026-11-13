---
uid: api.ba343286804f359bcd27a91c543af5e3b28966989885584af66141b7b4198f11
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: 3fd6f5bda611c64a952eb35cc9836e7bff14546c65654fd37c46ee43ec6c7fcd
title: "CaptureOutputAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures a tool's standard output while forwarding errors and preserving the common process lifecycle.

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** Structured arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The directory used for project and SDK resolution.

**Parameter `cancellationToken`:** Cancels the child process tree and waits for its complete exit.

**Parameter `environment`:** Optional child-only environment variables. Null values remove inherited variables; empty values remain explicitly empty.

**Returns:** The complete standard output after successful exit. Unsuccessful exits retain captured output in the exception.

**Exception `T:System.InvalidOperationException`:** The tool fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.
