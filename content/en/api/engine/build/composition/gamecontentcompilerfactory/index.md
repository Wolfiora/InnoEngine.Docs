---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.build.composition.ad995aebfba1a445
symbol: engine:Inno.Build.Composition:T:Inno.Build.Composition.GameContentCompilerFactory
title: GameContentCompilerFactory
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 19be1296c18863005cb405e18cb9ad675f16d3f68e04ca5e5b091a2882074285

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-build-composition
aliases: []
---

## Parameters

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

## Returns

A non-null scoped compiler that never disposes or globally retains these services.
