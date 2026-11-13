---
uid: api.7047b203a09e3d51c02203bdcbad5f4c97cf526056319c471f10341f990653a6
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceParameter.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection)"
source: xml
reviewed: 9cdc6133e2cac8380ca37b6eeb504b3ac23b4740e6994992de8333514b90ece3
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a validated function parameter.

**Parameter `name`:** Public parameter name, used for semantic port matching rather than ordinal matching.

**Parameter `type`:** Canonical value type.

**Parameter `direction`:** Declared value flow.

**Exception `T:System.ArgumentException`:** The parameter has void type.
