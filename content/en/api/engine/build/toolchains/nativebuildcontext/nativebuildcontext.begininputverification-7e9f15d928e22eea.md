---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7e9f15d928e22eea39f295b6c1744f1a4317461320c62e8aad17b0099504a1d4
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.BeginInputVerification(System.String)
title: NativeBuildContext.BeginInputVerification
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 18555657a9eaceda6f44deb2583f0afd6a8251e52679d369510886e4cf62327a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `phase`:** The operation phase recorded in statistics, such as binding-locks or binding-generation.

## Returns

A context with a new input inventory and hash cache; existing scopes are unchanged.

## Remarks

Create another phase after each independent ownership wait, generation or compilation.
