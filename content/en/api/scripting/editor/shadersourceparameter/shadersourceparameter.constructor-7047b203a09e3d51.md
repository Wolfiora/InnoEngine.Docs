---
uid: api.7047b203a09e3d51c02203bdcbad5f4c97cf526056319c471f10341f990653a6
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceParameter.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection)"
source: xml
reviewed: d72b07f86b8434f9029d385dd3d261c18d09b31c40637e70de7a82bf703dad16
title: "ShaderSourceParameter.Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a validated function parameter.

## Parameters

**Parameter `name`:** Public parameter name, used for semantic port matching rather than ordinal matching.

**Parameter `type`:** Canonical value type.

**Parameter `direction`:** Declared value flow.

## Exceptions

**Exception `T:System.ArgumentException`:** The parameter has void type.
