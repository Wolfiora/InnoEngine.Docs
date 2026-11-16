---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9c7fcbce7f8bd5483e8f2b8b48cfb1a36f8980eb0e00db78c7ff420eb3215c7c
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.#ctor(System.String,System.String,Inno.Build.Toolchains.DotNetSdkDescriptor)
title: PlayerSupportPackBuildContext.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: 2962476e55cfd38849fd070e557ff4b9e0b4c4c9fe9cd51155c8f8815a9b48cf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The complete engine source checkout.

**Parameter `stagingDirectory`:** The empty transaction directory to populate.

**Parameter `sdk`:** The project-selected SDK frozen during read-only preflight.

## Exceptions

**Exception `T:System.ArgumentException`:** A required input is blank.
