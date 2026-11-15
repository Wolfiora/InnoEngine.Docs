---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8eb7db22321c48b727f01f27f371849cf22430434c754959bedff6e35712d52e
symbol: scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTableFlags.PreciseWidths
title: ImGuiTableFlags.PreciseWidths
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: da1d0011a4b99130d6cd9eedc1c453d46fe62ef063700cbb797ebf901429e40f
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Disable distributing remainder width to stretched columns (width allocation on a 100-wide table with 3 columns: Without this flag: 33,33,34. With this flag: 33,33,33). With larger number of columns, resizing will appear to be less smooth.
