---
uid: api.f109695a0681f0c5089d556601b27056cba9e0210d273139fd67646f2edc4147
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.#ctor(Inno.Scripting.Compiler.ScriptCompilerOptions,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment)"
source: xml
reviewed: 85bb0f0679465a8bb5b535569dcff9f3a7da925d01798f4945e7d3b49a6b9b4f
title: "Constructor"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Creates a compiler over explicit authoring services owned by one host.

**Parameter `options`:** The project and derived-cache locations used by compilation.

**Parameter `assets`:** The authoring asset pipeline supplying committed source artifacts.

**Parameter `plugins`:** The Plugin environment supplying the candidate Plugin source generation.

**Exception `T:System.ArgumentNullException`:** Thrown when an owner argument is `null`.

**Exception `T:System.ArgumentException`:** Thrown when the project root is empty.
