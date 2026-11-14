---
uid: api.04e13a7695ab5985cd8f9cfffb9d483c50594d088fe30e548c465f1fe699f055
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Discard(Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 373bece6505f20676a6889317197bf35f4064b25e8183e6f718e7390e49192b3
title: "ShaderIrBuilder.Discard"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Discards a fragment when the Boolean condition is true; other stages reject this instruction.

## Parameters

**Parameter `condition`:** Scalar Boolean from this block.

## Exceptions

**Exception `T:System.ArgumentException`:** The condition is not a Boolean or belongs to another builder.
