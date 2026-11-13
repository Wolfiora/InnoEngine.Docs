---
uid: api.5f855f230ffb4464cc9f668d9b013725372f0cb79a550031ec2f702275d77036
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.GameBuildContribution.#ctor(Inno.Build.Composition.BuildPlatformContribution,Inno.Build.Composition.GameContentCompilerFactory)"
source: xml
reviewed: 74f282a482f0d300f87dbbbd362f9cfca0d5aafd4eb390c5742d1ccea3a3c7a9
title: "Constructor"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Captures the complete contribution without instantiating authoring services or tools.

**Parameter `platform`:** The platform-owned target, packaging, Support Pack and SDK contribution.

**Parameter `compilerFactory`:** The selected content implementation factory, invoked once per pipeline composition.

**Exception `T:System.ArgumentNullException`:** A contribution or factory is null.
