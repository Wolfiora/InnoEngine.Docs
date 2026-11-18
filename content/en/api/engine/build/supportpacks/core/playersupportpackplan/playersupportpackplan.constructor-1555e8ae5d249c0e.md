---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1555e8ae5d249c0ef47792fef678de36e8fc55e722efe0ce5bace32237f817f7
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.#ctor(Inno.Build.BuildTargetId,System.String)
title: PlayerSupportPackPlan.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: fb7b9130148fce799ab56eda971bbf624910b0e6ab4b74e488ce8450a5f6e8f8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The nonempty target whose closure this plan prepares.

**Parameter `preparationIdentity`:** The complete lowercase SHA-256 input identity captured without preparing product output.

## Exceptions

**Exception `T:System.ArgumentException`:** The target has no stable identity.
