---
uid: api.d4e90ffde16ac8a1b8dc5b4ff8987d0f6f2f45e034c33219e68d834e97a3a310
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrStageInput.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderIrInputKind,System.String,System.Int32)"
source: xml
reviewed: 59c57005b6c06a0797d18f33f916ee387112e9ec2f7029452f82268499159114
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates an immutable stage input binding.

**Parameter `id`:** Stable binding identity, also used by the block's named Input instruction.

**Parameter `type`:** Complete non-void type.

**Parameter `kind`:** Source of the GPU value.

**Parameter `semantic`:** Target semantic, such as position, texcoord, color, instance-data or fragment-coordinate.

**Parameter `location`:** Attribute/semantic index or assigned texture slot, never a native handle.
