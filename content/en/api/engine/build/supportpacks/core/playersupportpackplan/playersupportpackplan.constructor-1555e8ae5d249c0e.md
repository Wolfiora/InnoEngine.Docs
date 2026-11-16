---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1555e8ae5d249c0ef47792fef678de36e8fc55e722efe0ce5bace32237f817f7
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.#ctor(Inno.Build.BuildTargetId,System.String)
title: PlayerSupportPackPlan.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: 7f810569500242258d9755264ded69f4ce60b9f2c9e677d57109e57c7c72f138
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
