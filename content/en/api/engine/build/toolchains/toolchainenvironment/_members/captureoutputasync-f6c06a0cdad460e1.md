---
uid: api.f6c06a0cdad460e1b7cf436ed46fd28957e076b160aaa1c6b3fe0954a2e455fc
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.Diagnostics.ProcessStartInfo,System.Threading.CancellationToken)"
source: xml
reviewed: eba599d71a80605e8698ec0fee96ffec429b8fe5ad22f04d96a12ff5f92269a2
title: "CaptureOutputAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures platform tool discovery through the same cancellable process lifecycle as builds.

**Parameter `start`:** The prepared discovery command, including any platform-specific argument quoting.

**Parameter `cancellationToken`:** Cancels discovery and waits for its process tree to exit.

**Returns:** Complete standard output after successful discovery; errors and cancellation propagate.
