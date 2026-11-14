---
uid: api.7e9f15d928e22eea39f295b6c1744f1a4317461320c62e8aad17b0099504a1d4
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.BeginInputVerification(System.String)"
source: xml
reviewed: 369a95c7e6877790cec4efcc71bf5e122d9ae2e3fc21511aff4c51c609a2bee3
title: "NativeBuildContext.BeginInputVerification"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Starts a fresh verification phase whose reads can be shared only within this derived context.

## Parameters

**Parameter `phase`:** The operation phase recorded in statistics, such as binding-locks or binding-generation.

## Returns

A context with a new input inventory and hash cache; existing scopes are unchanged.

## Remarks

Create another phase after each independent ownership wait, generation or compilation.
