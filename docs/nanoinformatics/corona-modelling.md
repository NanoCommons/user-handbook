---
layout: page
title: Corona modelling

description: Corona modelling approaches and tools
permalink: /nanoinformatics/corona-modelling/
parent: Nanoinformatics
has_children: false
has_references: true
---

# Corona modelling approaches and tools
<img src="{{ site.baseurl }}/images/nanoinformatics/corona.png" class="image--right" />
Interactions of a foreign nanomaterial (NM) with biological tissues control its fate and biological activity, including cellular attachment, uptake and any eventual hazard. Quantitative study of these interactions is extremely challenging due to the presence of multiple molecule types and material chemistries - as well as structure-specific effects, and while the immense system size prohibits the atomistic level modelling. It is now well accepted that the interaction of NMs with biological fluids leads to the formation of a protein layer on the surface of the NM which is known as the protein corona. It has been established that the corona plays the central role in the bioactivity of the NM. 

Computer simulations of the interactions of NMs with proteins can offer a great support to experiments because of their great speed and flexibility (An et al., 2015). However, it has also been extremely challenging to develop a model that can predict the composition of the protein corona around an inorganic NM, as this depends on a multitude of physicochemical properties both of the protein, such as charge, isoelectric point and hydrophilicity/hydrophobicity and of the NM, such as size, shape, pH, hydrophilicity/hydrophobicity, and charge distribution. Still, successful approaches are emerging, which can be classified as physics-based or data-driven.

## Physics-based modelling
Full-atomistic simulations have already proven to be a valuable tool in elucidating the binding mechanisms of proteins on metallic NMs (Brancolini et al., 2012; Ding et al., 2013; Khan et al., 2013). However, their performance is severely hindered by the inefficiency in simulating systems with large NMs due to the high number of pair interactions that need to be evaluated. To speed-up the calculations, a cut-off of at the order of a nanometer is often introduced. However, this results in an underestimation of the adsorption energies of proteins on NMs due to the neglect of the influence from the core of the NM, which contributes much to their mutual attraction (especially at radii of over 10 nm) and so cannot be neglected. A coarse grained (CG) model of protein-NM interactions can overcome most of the challenges in the inclusion of NM core in the interaction.

While the number of atom-atom pairs in this problem is extremely large, the overall energy includes numerous instances of the same contributions, like the pair interaction of a given amino acid (AA) with a unit volume of the NM. One can dramatically reduce the amount of calculations by pre-computing those interactions for the specific materials in a specific medium. For a protein, one would need to pre-compute the interaction potentials between the AA and the NM through water, bearing in mind that different potentials will be needed for the interaction with the NM surface and the core. Assuming that these interactions do not depend on the position of the AA inside the protein and are additive (the two most significant approximations of the model), one can quickly scan multiple proteins once the potentials are known.

A description of the systematic procedure of evaluation of the required potentials of mean force is out of scope for this Handbook. Instead, we refer to the summary provided in: 

[First corona simulation tools integrated into NanoCommons KnowledgeBase](https://zenodo.org/record/7079223)
{: .more-link .more-link--pdf }

This gives information on:
- Multiscale model of NM-protein interaction
- Coarse-grain protein model
- Coarse-grain NM
- Generation of surface potentials
- Generation of the core potential
- Evaluation of the adsorption free energy
- Simulation parameters
as well as the software used and na example of using the tool within the NanoCommons KB for evaluation of adsorption energy of human serum albumin (HSA) protein onto gold NM .

<img src="{{ site.baseurl }}/images/nanoinformatics/Au-corona.png" class="image--right-large" />
Orientation-specific binding energy E of HSA on an R = 5 nm (top) and R = 50 nm (bottom) Au NM (Power et al., 2019).
<br clear="all">

Additional training and an integrated approach using predictions and experimental data is available here:

[Introduction to biocorona in silico modelling around nanoparticles](https://www.youtube.com/watch?v=UhnWZCv8Iyk)
{: .more-link .more-link--video }
[Demonstration case]({{ site.baseurl }}/demonstration-cases/Corona-demonstration-case/)
{: .more-link .more-link--text }


## NanoXtract corona prediction model
An integrated workflow based on the NanoXtract image analysis system enables experimental groups to upload NM images, extract multiple physical properties (size, diameter, roundness etc.) by image processing and feed this information into a data-driven Corona prediction model to derive predictions about the absorption of specific proteins and to compare these with experimental data.

<img src="{{ site.baseurl }}/images/nanoinformatics/corona-prediction1.png" class="image--left-large" />
NanoXtract Image analysis tool integrated into the NanoCommons KB, enabling upload of TEM images of NMs and automated extraction of a range of NM image descriptors.
<br clear="all">

<img src="{{ site.baseurl }}/images/nanoinformatics/corona-prediction2.png" class="image--left-large" />
Corona analysis results list indicating the NM ID, the specific protein ID and the protein binding heatmap and the related outputs.
<br clear="all">

<img src="{{ site.baseurl }}/images/nanoinformatics/corona-prediction3.png" class="image--left-large" />
Results of Corona prediction for one specific NM (Amorphous SiO2 NMs with a particular coating and surface functionalisation) interacting with one specific protein (major pollen allergen Bet v 1A in this case), indicating the heatmap and providing links to the mapping and logfile.
<br clear="all">

<img src="{{ site.baseurl }}/images/nanoinformatics/corona-prediction4.png" class="image--left-large" />
Detailed experimental results and metadata, as recorded in the NanoCommons KB.  Note also that the links to the relevant experimental data are also provided, and to the ontology terms for the specific assays, the standard operating procedure or protocol.  Additionally, the [Nano-specific extension of the InChI (the so-called NInChI)]({{ site.baseurl }}/FAIRification/FAIRidentifiers/) as developed within NanoCommons (see Lynch et al., 2020) is also provided for the specific NM, noting that this may change as it is based on the prototype (alpha) version and is not yet an IUPAC standard. 
<br clear="all">

References
{: .references-header }
- An et al., 2015: An, D.; Su, J.; Li, C.; Li, J. Computational studies on the interactions of nanomaterials with proteins and their impact. <i>Chin. Phys. B</i> <b>2015</b>, <i>24</i>, 120504. <a href="https://doi.org/10.1088/1674-1056/24/12/120504">https://doi.org/10.1088/1674-1056/24/12/120504</a>.
- Brancolini et al., 2012: Brancolini, G.; Kokh, D.B.; Calzolai, L.; Wade, R.; Corni, S. Docking of ubiquitin to gold nanoparticles. <i>ACS Nano</i> <b>2012</b>, <i>6</i>, 9863–78. <a href="https://doi.org/10.1021/nn303444b">https://doi.org/10.1021/nn303444b</a>.
- Ding et al., 2013: Ding, F.; Radic, S.; Chen, R.; Chen, P.; Geitner, N.; Brown, J.; Ke, P. Direct observation of a single nanoparticle–ubiquitin corona formation. <i>Nanoscale</i> <b>2013</b>, <i>5</i>, 9162–9. <a href="https://doi.org/10.1039/C3NR02147E">https://doi.org/10.1039/C3NR02147E</a>.
- Khan et al., 2013: Khan, S.; Gupta, A.; Nandi, C. Controlling the fate of protein corona by tuning surface properties of nanoparticles. <i>J. Phys. Chem. Lett.</i> <b>2013</b>, <i>4</i>, 3747–52.<a href="https://doi.org/10.1021/jz401874u">https://doi.org/10.1021/jz401874u</a>.
- Power et al., 2019: Power, D.; Rouse, I.; Poggio, S.; Brandt, E.; Lopez, H.; Lyubartsev, A.;  Lobaskin, V. A multiscale model of protein adsorption on a nanoparticle surface. <i>Modelling Simul. Mater. Sci. Eng.</i> <b>2019</b>, <i>27</i>, 084003. <a href="https://doi.org/10.1088/1361-651X/ab3b6e">https://doi.org/10.1088/1361-651X/ab3b6e</a>.
{: .references }

