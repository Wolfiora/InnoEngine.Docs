---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0e6f709577c8cd1d86ead6dc0b0913eae4de81e290f91df322479ea860ed93dc
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.TryCreateForHost(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String})
title: SourcePlayerSupportPackProvisioner.TryCreateForHost
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: ab8e6c795266e5a6cf4786ea34255e608fd5d91d622cef6d03df2f3221bd47f0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `startDirectory`:** The host binary directory from which to search upward.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter, retained only by the returned provisioner.

## Returns

A source provisioner, or null when the host is a source-independent distribution.

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** An explicit `INNO_ENGINE_ROOT` does not identify a complete engine checkout.
