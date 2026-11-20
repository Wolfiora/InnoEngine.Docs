---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7756335af163ea5aa5d98061c09b23e5298146f8340014a95844ff9dd035a3df
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.#ctor(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String},System.String)
title: SourcePlayerSupportPackProvisioner.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 9d44f5beed42c58de3107eaebd0e1db8f976471eff63fd6120920e826baf417f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The directory containing InnoEngine.sln and the Player project.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter for successful-publication indexing and cleanup diagnostics.

**Parameter `nativeDependencies`:** An absolute dependency selection disabling third-party production, or null for local source preparation.

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** The directory is not an engine checkout.
