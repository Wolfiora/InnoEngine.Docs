---
uid: api.02376b3d83c40e77244f8473c2e0173038e3844ea9c7633c44b5776d983b0a6a
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.#ctor(System.String,System.String,System.String,System.Int32,System.Boolean)"
source: xml
reviewed: 3bf1b483df2069fc758b64423202a885c79295413845b85e74509f5ef2042b1e
title: "Constructor"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Associates the drawer with one stable node definition.

**Parameter `definitionId`:** The compiler-independent graph node identity.

**Parameter `displayName`:** Optional artist-facing name used in node headers and creation menus.

**Parameter `createPath`:** Optional slash-delimited path below Create. Empty uses the host's built-in classification.

**Parameter `createOrder`:** Stable ordering value among sibling creation groups and nodes.

**Parameter `separatorBefore`:** Whether the contributed creation group is preceded by a separator at its own level.
