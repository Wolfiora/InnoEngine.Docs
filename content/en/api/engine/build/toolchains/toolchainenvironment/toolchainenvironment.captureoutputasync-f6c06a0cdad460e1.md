---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f6c06a0cdad460e1b7cf436ed46fd28957e076b160aaa1c6b3fe0954a2e455fc
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.Diagnostics.ProcessStartInfo,System.Threading.CancellationToken)
title: ToolchainEnvironment.CaptureOutputAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: eba599d71a80605e8698ec0fee96ffec429b8fe5ad22f04d96a12ff5f92269a2

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `start`:** The prepared discovery command, including any platform-specific argument quoting.

**Parameter `cancellationToken`:** Cancels discovery and waits for its process tree to exit.

## Returns

Complete standard output after successful discovery; errors and cancellation propagate.
