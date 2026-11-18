---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f109695a0681f0c5089d556601b27056cba9e0210d273139fd67646f2edc4147
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.#ctor(Inno.Scripting.Compiler.ScriptCompilerOptions,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment)
title: ScriptCompiler.Constructor
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
sourceFingerprint: ac0e0f7a6c75246c617c3aa4eab6fef011cab1616efcb0631261ec85c9922202
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** The project and derived-cache locations used by compilation.

**Parameter `assets`:** The authoring asset pipeline supplying committed source artifacts.

**Parameter `plugins`:** The Plugin environment supplying the candidate Plugin source generation.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when an owner argument is `null`.

**Exception `T:System.ArgumentException`:** Thrown when the project root is empty.
