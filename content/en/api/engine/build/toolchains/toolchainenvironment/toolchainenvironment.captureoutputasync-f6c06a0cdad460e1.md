---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f6c06a0cdad460e1b7cf436ed46fd28957e076b160aaa1c6b3fe0954a2e455fc
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.Diagnostics.ProcessStartInfo,System.Threading.CancellationToken)
title: ToolchainEnvironment.CaptureOutputAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: e3c338029ac3aabd75f055790ccfd36893981afc4ac41596cc60137526419386
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
