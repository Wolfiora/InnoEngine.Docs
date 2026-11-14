---
uid: api.aec967b2595246bfd0fedbdcaae2af87500db8b74fc22cf140b8fe9b84426882
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.#ctor(Inno.Build.SupportPacks.PlayerSupportPackRequirements,Inno.Build.IPlayerSupportPackValidator,Inno.Build.IPlayerSupportPackValidator)"
source: xml
reviewed: b8905c7ab6ea0f99d2ce282778a278b544443b114a81341650aa39d5773e70ad
title: "PlayerSupportPackClosureValidator.Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Borrows validators while retaining only the immutable selected closure requirements.

## Parameters

**Parameter `requirements`:** The distribution's frozen input requirements.

**Parameter `platform`:** The borrowed layout and ABI validator.

**Parameter `deployment`:** An optional implementation-owned deployment metadata validator.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Requirements or the platform validator are null.
