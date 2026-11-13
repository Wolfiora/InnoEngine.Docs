---
uid: api.inno.rendering.assets.authoring.fe6c6fcbef1f0bc3
symbol: "engine:Inno.Rendering.Assets.Authoring:T:Inno.Rendering.Assets.Authoring.ShaderStageBinding"
source: xml
reviewed: e0cb455dde192d301a852ef26a21051d84b20a6c2cfb7a364afa0efa4699e8c0
title: "ShaderStageBinding"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
contracts:
- project.inno-rendering-assets-authoring
aliases: []
---

Maps one logical binding to the adapter-generated native name, without exposing a GPU handle.

**Parameter `id`:** Stable logical binding identity from the typed stage.

**Parameter `nativeName`:** Generated name used for reflection and runtime uniform binding.

**Parameter `location`:** Assigned texture slot; uniform locations are resolved by the runtime.
