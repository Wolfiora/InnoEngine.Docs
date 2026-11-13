---
uid: api.ebd2d6029ce745f0b8e49ad796b41dfd66ab5c59c5f41c2d2673cb0e1784f795
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.EmscriptenToolchainResolver.ResolveAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: e6261472ca3181ee9134f150459e458c7534e99cbae8aedc39626896d000c48f
title: "ResolveAsync"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Resolves the native toolchain actually selected by MSBuild for one browser project.

**Parameter `dotnetHost`:** The SDK host executable, either an absolute path or a name available on PATH.

**Parameter `projectPath`:** The browser project whose target framework and SDK determine workload selection.

**Parameter `cancellationToken`:** Cancels the hidden SDK query and waits for its exit.

**Returns:** Variables for native builds and binding generation, without changing the parent process.

## Remarks

Compiler worker budgets remain inherited from the host environment or tool defaults. Runtime threading policy does not constrain build-time parallelism.

**Exception `T:System.IO.FileNotFoundException`:** The SDK host or a required Emscripten workload component is missing.

**Exception `T:System.ArgumentException`:** The SDK host or project path is empty.

**Exception `T:System.IO.DirectoryNotFoundException`:** A selected SDK directory or sysroot is missing.

**Exception `T:System.InvalidOperationException`:** Project evaluation fails or does not select a complete native toolchain.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.
