---
uid: api.0f032a78611accedfeb68ae725a4d5b85120d564ce102c7f8b32924e727d7ef8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: 8ec710e4b16218f546df9c799828ede75f105a1eda34b29f4d604db2a074707a
title: "RunAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Runs a child build with structured arguments, cancellation and hidden windows.

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** The individual arguments, passed without shell interpretation.

**Parameter `workingDirectory`:** The repository or staging directory owned by the operation.

**Parameter `cancellationToken`:** Cancels the child process and its complete process tree.

**Parameter `environment`:** Optional process-local toolchain variables; the parent environment is unchanged. Null values remove inherited variables, while empty values remain explicitly empty.

**Returns:** Completion after both output streams have drained and the process succeeds.

**Exception `T:System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.
