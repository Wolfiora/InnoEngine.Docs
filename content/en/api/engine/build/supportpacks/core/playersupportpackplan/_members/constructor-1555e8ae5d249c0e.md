---
uid: api.1555e8ae5d249c0ef47792fef678de36e8fc55e722efe0ce5bace32237f817f7
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.#ctor(Inno.Build.BuildTargetId,System.String)"
source: xml
reviewed: 3a6f82dfa0004eb8e61ff1239a1ef60fa4eac718c77167861532281176fe4150
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Fixes the publication identity before preparation is permitted.

**Parameter `target`:** The nonempty target whose closure this plan prepares.

**Parameter `preparationIdentity`:** The complete lowercase SHA-256 input identity captured without preparing product output.

**Exception `T:System.ArgumentException`:** The target has no stable identity.
