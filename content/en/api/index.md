---
title: API reference
description: Choose the API surface that matches your caller before looking up a declaration.
uid: api.home
kind: landing
---
# API reference

Choose the engine API surface your caller actually receives. Public CLR declarations and script projections have different consumers and obligations. This reference covers InnoEngine; it does not mirror third-party native libraries or generated bindings.

| Reference | Intended use |
| --- | --- |
| [Engine](engine/index.md) | Public and externally usable protected C# contracts owned by src/ and build/, organized by project. |
| [Runtime scripting](scripting/runtime/index.md) | Runtime exports, also available in the Editor script compilation context. |
| [Editor scripting](scripting/editor/index.md) | Editor-only exports selected by their actual declared Scope. |
| [Authoring scripting](scripting/authoring/index.md) | Authoring annotations with compilation-time applicability. |

Engine API excludes every root except src/ and build/, as well as test and fixture projects within those roots. Their engine integration and verification guides remain available outside this reference. Script Scope and compilation context are separate: each type lists its actual availability.

## Source and editorial ownership

Generic types use their declared parameter names, such as `EditorAction<TTarget, TArgument>`. Distinct types with the same short name are qualified by namespace where needed. Page addresses may include a stable identity suffix to avoid collisions; that suffix is not part of the API name.

Declarations, inheritance, member lists and source links come from the selected engine API export. Each type and member has independent prose: **XML-synced** content follows source XML; manually maintained explanations remain under their author's control. A missing editorial addition is a reminder, not proof that an API is unavailable or unsafe.

The reference represents the engine revision recorded in this site's provenance. It does not silently follow newer engine commits. See [maintaining API documentation](../contributing/api-documentation.md) to enrich a type or member.

## Read a contract completely

Check the declaration, parameters, return value, observable failures, and linked shared constraints. A source link locates implementation; it does not replace documentation of ownership, threading, or release.

An exact signature match proves declaration coverage for the selected inputs. It does not prove that every documented behavior has been executed on every platform.

## Find the workflow first

If you are unsure which surface applies, start with the [Manual](../manual/index.md) or [extension guide](../extending/index.md). They explain the intended owner and link the relevant API rather than requiring assembly knowledge up front.
