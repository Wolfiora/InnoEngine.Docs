---
uid: api.730a3c790767a8cf3f407a9adea52fe4a0357b51aaf2e94370935f9b3afa7e16
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserModule.#ctor(Inno.Editor.Assets.AssetEditingModule,Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Settings.EditorSettings,Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: 85f7489012e0f58e0d49984207c103f0ba34f8fd739ef362e308efb0e10ddb46
title: "AssetBrowserModule.Constructor"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Creates the asset presentation module for the current editor generation.

**Parameter `edits`:** The independent authoritative asset editing service.

**Parameter `interactions`:** The editor selection and action owner.

**Parameter `settings`:** The editor settings that supply semantic icon choices.

**Parameter `types`:** The active extension type catalog.

**Exception `T:System.ArgumentNullException`:** A required owner is null.
