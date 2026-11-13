---
uid: api.aec967b2595246bfd0fedbdcaae2af87500db8b74fc22cf140b8fe9b84426882
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.#ctor(Inno.Build.SupportPacks.PlayerSupportPackRequirements,Inno.Build.IPlayerSupportPackValidator,Inno.Build.IPlayerSupportPackValidator)"
source: xml
reviewed: 7f1755bc107353e6dcaa39e676fd803077047a9bae20bf1479c973c83c920a15
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Borrows validators while retaining only the immutable selected closure requirements.

**Parameter `requirements`:** The distribution's frozen input requirements.

**Parameter `platform`:** The borrowed layout and ABI validator.

**Parameter `deployment`:** An optional implementation-owned deployment metadata validator.

**Exception `T:System.ArgumentNullException`:** Requirements or the platform validator are null.
