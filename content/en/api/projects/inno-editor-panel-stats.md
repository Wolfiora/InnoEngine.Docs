---
title: Inno.Editor.Panel.Stats
description: The discovered Stats panel and its bounded frame-timing presentation.
uid: api.projects.inno-editor-panel-stats
kind: project
owners: [Inno.Editor.Panel.Stats]
contracts: [manual.editor-statistics, architecture.editor-generations]
---
# Inno.Editor.Panel.Stats

This project provides the independently discovered Stats panel. It reads `EditorContext.statistics` and owns a bounded frame-time sampler. It does not own Scene, Assets, Rendering, interaction business logic or a general profiler service.

## Use and extend

[Read and publish Editor statistics](../../manual/editor/statistics.md) explains the user workflow and the contribution protocol. Features publish through Core instead of referencing this implementation. The panel uses its discovery attribute; the application does not maintain a manual panel-registration list.

## Presentation and ownership

The panel groups stable contributions and uses shared section headers, content padding, border metrics and alternating collection-row colors. Long contributor names, pipeline IDs and resolution descriptions wrap inside the value column. The frame graph borrows the panel's own bounded numeric buffers.

Host-driven attach, draw and detach hooks own its lifecycle. A draw failure quarantines this panel; cleanup still follows the shared retirement protocol. The implementation does not retain feature instances through its string-based statistics.

## API reference

The evaluated assembly has no externally visible types. It declares no script API. The supported extension contract belongs to [Editor Core](inno-editor-core.md), and exposing internal sampler or panel classes is not necessary to contribute a value.
