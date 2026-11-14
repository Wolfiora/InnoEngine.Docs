---
uid: api.33986aee50aa16a12e59b24aa1f0f9a475959792f377392f1e985af9d390f494
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.#ctor(System.String,System.String,System.Boolean,System.Boolean)"
source: xml
reviewed: c2fa66c27dc815e2355b3db33538f9d146d2f66faee0d957e406e9e6ec41deeb
title: "NativeBindingIncludeDirectory.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Preserves the order and search semantics of one native include requirement.

## Parameters

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The root-relative directory, or empty for the root itself.

**Parameter `system`:** Whether this directory contains system headers.

**Parameter `framework`:** Whether the compiler must use framework search semantics.
