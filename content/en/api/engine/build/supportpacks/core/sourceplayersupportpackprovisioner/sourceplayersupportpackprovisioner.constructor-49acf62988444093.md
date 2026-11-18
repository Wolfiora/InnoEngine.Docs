---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.49acf6298844409395dd0029cdf563f74aa75430d7150c589b6edbed3e5a7ef6
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.#ctor(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String})
title: SourcePlayerSupportPackProvisioner.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 7569ba7af20056945654bc8a0b0df7b03d8a247c9f3f57acf75586c8117f1607
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

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** The directory is not an engine checkout.
