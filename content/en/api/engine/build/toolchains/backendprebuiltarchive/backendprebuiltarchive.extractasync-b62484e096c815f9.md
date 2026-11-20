---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b62484e096c815f9009aa87947052185b7fddf8e218931ece78a6e229c4c50b1
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BackendPrebuiltArchive.ExtractAsync(System.String,System.String,System.String,System.String,System.Threading.CancellationToken)
title: BackendPrebuiltArchive.ExtractAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 841af62fcf5aaee7eb744b1b44a31316e18280057949bc55dad5b9674345e14f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `archivePath`:** Downloaded or restored platform archive.

**Parameter `sha256`:** Expected archive digest from the authenticated release or candidate receipt.

**Parameter `target`:** Target selected by the consumer.

**Parameter `destination`:** An absent directory under a consumer-owned staging parent.

**Parameter `cancellationToken`:** Cancels extraction before publication.

## Returns

A task that completes after the verified directory is installed.
