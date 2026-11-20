---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.abd598cd2208395f5f6ef18f9b17910d373eef9b5918f1f3e7de24e35ffac3cc
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.TryCreateForHost(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String},System.String)
title: SourcePlayerSupportPackProvisioner.TryCreateForHost
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: c1d6e0dff524216f211512016674c9ce6d9007530b09eec54edde4924f2a9d8f
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

**Parameter `nativeDependencies`:** The explicit consume-only selection retained by the returned provisioner, or null for local source preparation.

## Returns

A source provisioner, or null when the host is a source-independent distribution.

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** An explicit `INNO_ENGINE_ROOT` does not identify a complete engine checkout.
