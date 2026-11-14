---
uid: api.1555e8ae5d249c0ef47792fef678de36e8fc55e722efe0ce5bace32237f817f7
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.#ctor(Inno.Build.BuildTargetId,System.String)"
source: xml
reviewed: aa1ffc9f95a0f32cd5888300e030683af8228b60ef1f0a0867090df0b9a6be23
title: "PlayerSupportPackPlan.Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Fixes the publication identity before preparation is permitted.

**Parameter `target`:** The nonempty target whose closure this plan prepares.

**Parameter `preparationIdentity`:** The complete lowercase SHA-256 input identity captured without preparing product output.

**Exception `T:System.ArgumentException`:** The target has no stable identity.
