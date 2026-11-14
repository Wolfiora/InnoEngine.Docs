---
uid: api.080cdf65bf810bb0021b947072f0f51f46bb86af881352c9589f65eb4f43e45a
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderNodeDrawerAttribute.#ctor(System.String,System.String,System.String,System.Int32,System.Boolean)"
source: xml
reviewed: 014c0117c36955d3a725708cc6cde310a611957b49be8412e4c60c386faa13db
title: "ShaderNodeDrawerAttribute.Constructor"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Associates the drawer with one stable node definition.

## Parameters

**Parameter `definitionId`:** The compiler-independent graph node identity.

**Parameter `displayName`:** Optional artist-facing name used in node headers and creation menus.

**Parameter `createPath`:** Optional slash-delimited path below Create. Empty uses the host's built-in classification.

**Parameter `createOrder`:** Stable ordering value among sibling creation groups and nodes.

**Parameter `separatorBefore`:** Whether the contributed creation group is preceded by a separator at its own level.
