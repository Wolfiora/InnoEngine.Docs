---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.build.composition.fc13ccd2c8248070
symbol: engine:Inno.Build.Composition:T:Inno.Build.Composition.BuildTargetFactory
title: BuildTargetFactory
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 944661e966c6f25998910f0ea79a8a4bb2ed8ae611919c51ab9f790495b726cc
contracts:
- project.inno-build-composition

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Returns

A non-null packaging implementation retained by the pipeline without a separate lifetime.

## Remarks

The build distribution explicitly registers target factories and the required toolchains. Installing a runtime module does not select a new publication target.
