---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f6c06a0cdad460e1b7cf436ed46fd28957e076b160aaa1c6b3fe0954a2e455fc
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.Diagnostics.ProcessStartInfo,System.Threading.CancellationToken)
title: ToolchainEnvironment.CaptureOutputAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 07b84e0648501c81c5db11a58ddbe831c2ea8d62425924fdfab69898252b37ec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `start`:** The prepared discovery command, including any platform-specific argument quoting.

**Parameter `cancellationToken`:** Cancels discovery and waits for its process tree to exit.

## Returns

Complete standard output after successful discovery; errors and cancellation propagate.
