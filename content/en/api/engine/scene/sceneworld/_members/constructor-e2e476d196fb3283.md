---
uid: api.e2e476d196fb3283de1cab8ddff4cb27d1f3842f3f30210b13ee673358561bba
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.#ctor(Inno.Core.Identity.IdentityAllocator,Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: 28c2cdf9654bada394edabb814644b3372bcee34c0bcf938dfa5e9e6eec1cf95
title: "Constructor"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an empty scene world bound to one session identity allocator.

**Parameter `identities`:** The allocator that owns identities for scenes and their elements.

**Parameter `types`:** The host type catalog used to derive scene component and system generations.

**Exception `T:System.ArgumentNullException`:** Thrown when `identities` is null.
