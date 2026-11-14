---
uid: api.5f855f230ffb4464cc9f668d9b013725372f0cb79a550031ec2f702275d77036
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.GameBuildContribution.#ctor(Inno.Build.Composition.BuildPlatformContribution,Inno.Build.Composition.GameContentCompilerFactory)"
source: xml
reviewed: a43591ea113a153d109b0b77425d7847b5e8d9ca025982a93430cd761733bf77
title: "GameBuildContribution.Constructor"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Captures the complete contribution without instantiating authoring services or tools.

## Parameters

**Parameter `platform`:** The platform-owned target, packaging, Support Pack and SDK contribution.

**Parameter `compilerFactory`:** The selected content implementation factory, invoked once per pipeline composition.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A contribution or factory is null.
