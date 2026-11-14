---
uid: api.16aa2dd38770af742f575a4b42ad84aa5b841b1836990763028961aef9f24cea
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.#ctor(Inno.Scripting.Reload.ScriptReloadOptions,Inno.Scripting.Compiler.ScriptCompiler,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Extensibility.Modules.ModuleHost,Inno.Core.Settings.ProjectSettingsStore,Inno.Scripting.Reload.IScriptReloadCoordinator,System.Func{Inno.Scripting.Compiler.ScriptModuleDeployment,Inno.Extensibility.Modules.IModuleSource})"
source: xml
reviewed: 03b54d46f7e43aa30eee160c942ba7ad17631e1a8682455be70bc49da0fa6d00
title: "ScriptReloadHost.Constructor"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Creates a reload host for one compiler and runtime module owner.

## Parameters

**Parameter `options`:** The automatic compilation, debounce, and long-running warning policy.

**Parameter `compiler`:** The compiler that produces immutable candidate script generations.

**Parameter `assets`:** The authoring asset pipeline that supplies committed source artifacts.

**Parameter `plugins`:** The Plugin environment that owns active and candidate source generations.

**Parameter `modules`:** The module host that atomically activates compiled assemblies.

**Parameter `settings`:** The project settings store rebuilt with each committed Plugin generation.

**Parameter `reloads`:** The host-owned coordinator that commits dependent state together with script generations.

**Parameter `moduleSourceFactory`:** The composition-owned factory that chooses the loading policy for each immutable script module. It must return a fresh source without activating or publishing the module.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when any required dependency is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when the configured debounce duration is negative.
