---
uid: api.d98d8fba23cd4b725a262669c771331268677250da2f63665343d965049354af
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: df464c4ba91f8de2eecb619fdb9de258341e29696d221b72079d8bf319968a34
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Maps one logical binding to the adapter-generated native name, without exposing a GPU handle.

**Parameter `id`:** Stable logical binding identity from the typed stage.

**Parameter `nativeName`:** Generated name used for reflection and runtime uniform binding.

**Parameter `location`:** Assigned texture slot; uniform locations are resolved by the runtime.
