---
uid: api.24c293b56806e12b02fdd14d2367da2530ae714ed585d2006b86c5ba741b4bc8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: a916bb1995929700162ab9e081bd11db28a0cd8bad0f1aac6fc74cce6ce2d7a7
title: "ToolchainEnvironment.RunAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Runs a child build using a complete argument string, without a shell.

**Parameter `fileName`:** The executable resolved by the host operating system.

**Parameter `arguments`:** Arguments quoted for the selected executable's command-line parser.

**Parameter `workingDirectory`:** The directory owned by the operation.

**Parameter `cancellationToken`:** Cancels the complete process tree and waits for output to finish draining.

**Returns:** Completion after successful exit; failures and cancellation propagate.

**Exception `T:System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.
