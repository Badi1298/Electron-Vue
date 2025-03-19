<template>
	<div>
		<div class="relative w-full h-screen overflow-hidden">
			<div class="relative flex flex-col justify-center w-full h-full px-28 py-8">
				<our-portfolio />
				<div ref="exblifepBackground">
					<img
						src="/src/assets/images/textured-background.png"
						alt="Textured Background"
						class="absolute top-0 left-0 w-full h-full -z-30"
					/>
					<img
						src="/src/assets/images/exblifep-logo.svg"
						alt="Exblifep Logo"
						class="absolute top-[150px] left-[130px] h-[179px] -z-30 opacity-5"
					/>
					<img
						src="/src/assets/images/hallway-bed.png"
						alt="Hallway Bed"
						class="absolute -right-36 bottom-0 h-[874px] -z-30 opacity-10"
					/>
					<div class="absolute right-60 top-[38%] font-effra">
						<img
							src="/src/assets/images/exblifep-logo.svg"
							alt="Exblifep Logo"
							class="w-[307px]"
						/>
						<p class="mt-6 text-2xl text-cool-grey">
							EXBLIFEP<sup>®</sup> is where microbiological<br />
							eradication* meets efficacy<sup>1</sup>
						</p>
						<button
							class="relative flex items-center justify-end min-w-[264px] gap-x-7 py-2.5 px-[22px] mt-24 bg-electric-blue text-white text-2xl"
							@click="router.push('/exblifep')"
						>
							<span>Get started</span>
							<img
								src="/src/assets/images/chevron-right-white.png"
								alt="Chevron Right"
								class="w-[50px]"
							/>
						</button>
					</div>
					<footer class="absolute bottom-8 left-28 grid grid-cols-[1fr_0.4fr] items-end gap-x-4 max-w-[1470px]">
						<div>
							<the-footer
								>*In the ALLIUM study, microbiological eradication is defined as reduction of the qualifying baseline pathogen to less than 103
								CFU/mL in urine.<sup>1</sup><br />
								EXBLIFEP<sup>®</sup> is indicated for the treatment of the following infections in adults: Complicated urinary tract infections
								(cUTI), including pyelonephritis; Hospital-acquired pneumonia (HAP), including ventilator associated pneumonia (VAP);<br />
								Treatment of patients with bacteraemia that occurs in association with, or is suspected to be associated with, any of the
								infections listed above. Consideration should be given to official guidance on the appropriate use of antibacterial agents.<sup
									>5</sup
								></the-footer
							>
							<the-footer class="mt-1"
								>1. Kaye KS <span class="italic">et al. JAMA</span>2022;328(13):1304-1314. 2. Kiem S, Schentag JJ. Infect Chemother
								2013;45(3):283-291. 3. Kadry N <span class="italic">et al. Clin Infect Dis</span>2023;76(10):1768-1775. 4. Albin OR
								<span class="italic">et al. Clin Infect Dis</span>2020;71(12):3033-3041.<br />
								5. EXBLIFEP<sup>®</sup> Summary of Product Characteristics (March 2024). Available at:
								<span class="underline"
									>https://www.ema.europa.eu/en/documents/product-information/exblifep-epar-product-information_en.pdf.</span
								></the-footer
							>
						</div>
						<div class="flex items-center justify-center px-3 py-2 border border-black font-effra text-[10px] text-cool-grey max-w-fit">
							▼ This medicinal product is subject to additional monitoring. This will allow<br />
							quick identification of new safety information. Healthcare professionals<br />
							are asked to report any suspected adverse reactions.
						</div>
					</footer>
				</div>
				<div ref="zevteraDetails">
					<img
						src="/src/assets/images/home-zevtera-bg.png"
						alt="Zevtera Background"
						class="absolute top-0 left-0 w-full h-full -z-30"
					/>
					<img
						src="/src/assets/images/zevtera-mabelio-logo.png"
						alt="Zevtera Mabelio Logo"
						class="w-[1076px] absolute top-[116px] -z-30 opacity-5"
					/>
					<img
						src="/src/assets/images/mabelio-bullet.png"
						alt="Mabelio Bullet"
						class="absolute top-[19%] right-0 w-[1325px] -z-30 opacity-10"
					/>
					<div class="absolute top-[38%] right-[182px] font-effra">
						<img
							src="/src/assets/images/zevtera-mabelio-logo.png"
							alt="Exblifep Logo"
							class="w-[426px]"
						/>
						<p class="mt-7 text-2xl font-uni-grotesk">
							Allows the reduction of the number of<br />
							agents<sup>2</sup>, thanks to its expanded spectrum<br />
							of antimicrobial activity<sup>3</sup>
						</p>
						<button
							class="relative flex items-center justify-end min-w-[264px] gap-x-7 py-2.5 px-[22px] mt-16 bg-primary-purple text-white text-2xl"
							@click="router.push('/zevtera')"
						>
							<span>Get started</span>
							<img
								src="/src/assets/images/chevron-right-white.png"
								alt="Chevron Right"
								class="w-[50px]"
							/>
						</button>
					</div>
					<footer class="absolute bottom-8 left-28 max-w-[1150px]">
						<the-footer
							>Zevtera<sup>®</sup> is indicated for the treatment of the following infections in adults, term neonates, infants, children and
							adolescents: Hospital-acquired pneumonia (HAP),<br />
							excluding ventilator-associated pneumonia (VAP); Community-acquired pneumonia (CAP). Consideration should be given to official
							guidance on the appropriate use of antibacterial agents.<sup>4</sup><br />
							1. Awad SS <span class="italic">et al. Clin Infect Dis</span> 2014;59(1):51-61. 2. Crapis M
							<span class="italic">et al. J Chemother</span> 2020:Sep EO. 3. Giacobbe D
							<span class="italic">et al. Expert Rev Anti-infect Ther</span> 2019;17(9):689-698.<br />
							4. ZEVTERA® Summary of Product Characteristics (March 2024). Available at:
							<span class="underline">https://www.medicines.org.uk/emc/product/9164/smpc.</span></the-footer
						>
					</footer>
				</div>
				<div ref="xydBackground">
					<img
						src="/src/assets/images/home-xyd-large-bg.png"
						alt="Xyd Background"
						class="absolute top-0 left-0 w-full h-full -z-30"
					/>
					<img
						src="/src/assets/images/xyd-logo-white.png"
						alt="Xyd Logo White"
						class="absolute top-[120px] left-[110px] h-[200px] -z-30 opacity-5"
					/>
					<div class="absolute top-[38%] right-[212px] font-effra">
						<img
							src="/src/assets/images/xyd-logo-white.png"
							alt="Exblifep Logo"
							class="w-[338px]"
						/>
						<p class="mt-7 text-2xl text-white">
							Xydalba™ delivers two weeks of<br />
							effective treatment in a single dose,<sup>1</sup><br />
							meaning your patients can spend less<br />
							days in hospital<sup>2,3</sup>
						</p>
						<button
							ref="xydButton"
							class="relative flex items-center justify-end min-w-[264px] gap-x-7 py-2.5 px-[22px] mt-9 bg-primary-green text-white text-2xl"
							@click="router.push('/xyd')"
						>
							<span>Get started</span>
							<img
								src="/src/assets/images/chevron-right-white.png"
								alt="Chevron Right"
								class="w-[50px]"
							/>
						</button>
					</div>
					<footer class="absolute bottom-8 left-28 max-w-[1400px]">
						<the-footer class="text-white"
							>*Clinical success achieved in 84% of adult patients (ITT) on day 14 in the phase 3 study assessing a single dose vs 2-dose regimen
							of dalbavancin in ABSSSI.<sup>4</sup> Clinical cure rate similar across dalbavancin Single-Dose (97.4%) and 2-dose regimen
							(97.3%).<sup>5</sup><br />
							Xydalba™ is indicated for the treatment of Acute Bacterial Skin and Skin Structure Infections (ABSSSI) in adults. Consideration
							should be given to official guidance on the appropriate use of antibacterial agents.<sup>1</sup><br />
							1. XYDALBA™ Summary of Product Characteristics (September 2024). Available at:
							<span class="underline">https://www.ema.europa.eu/en/documents/product-information/xydalba-epar-product-information_en.pdf.</span>
							2. Marcellusi A <span class="italic">et al. Expert Rev Pharmacoecon Outcomes Res</span> 2019;4:1-19.<br />
							3. McCarthy MW <span class="italic">et al. Infect Dis Ther</span> 2020;9:53-67. 4. Dunne MW
							<span class="italic">et al. Clin Infect Dis</span> 2016;62:545-551. 5. Giorgobiani M
							<span class="italic">et al. Pediatr Infect Dis J</span> 2023;42(3):199-205.</the-footer
						>
					</footer>
				</div>
				<div class="relative flex flex-1 items-center w-fit">
					<!-- Carousel -->
					<div class="relative w-[1120px] h-[702px] flex justify-center">
						<div
							ref="carouselRef"
							class="carousel relative w-full h-full select-none"
							@mousedown="startDrag"
							@touchstart="startDrag"
							@mouseup="endDrag"
							@touchend="endDrag"
							@mouseleave="endDrag"
							@mousemove="onDrag"
							@touchmove="onDrag"
						>
							<!-- Explicit declaration of each carousel item -->
							<div
								ref="item0Ref"
								class="absolute top-1/2 left-1/2 w-0 h-0 carousel-item-wrapper"
								style="filter: drop-shadow(0px 3.811px 25.268px #1f17f6)"
							>
								<div
									class="carousel-item absolute top-1/2 left-1/2 w-[566px] h-[702px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
									:class="{ 'shadow-xl': activeIndex === 0 }"
								>
									<div class="relative w-full h-full bg-textured overflow-hidden bg-white pointer-events-none">
										<img
											src="/src/assets/images/exblifep-logo.svg"
											alt="Exblifep Life"
											class="absolute bottom-[25.5rem] left-1/2 -translate-x-1/2 w-[170px]"
										/>
										<img
											src="/src/assets/images/lime-green-border.png"
											alt="Lime Green"
											class="absolute bottom-[24rem] left-40 w-full h-1"
										/>
										<img
											src="/src/assets/images/hallway-bed.png"
											alt="Hallway Bed"
											class="absolute -bottom-12 -left-36 z-10 min-w-[670px] opacity-20"
										/>
										<img
											src="/src/assets/images/resistance-and-recurrence.png"
											alt="Resistance and Recurrence"
											class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[370px] z-20"
										/>
									</div>
								</div>
							</div>

							<div
								ref="item1Ref"
								class="absolute top-1/2 left-1/2 w-0 h-0 carousel-item-wrapper"
								style="filter: drop-shadow(0px 3.811px 25.268px #fcc100)"
							>
								<div
									class="carousel-item absolute top-1/2 left-1/2 w-[566px] h-[702px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
									:class="{ 'shadow-xl': activeIndex === 1 }"
								>
									<div class="relative w-full h-full bg-white overflow-hidden pointer-events-none">
										<img
											src="/src/assets/images/home-zevtera-doctor-bg.png"
											alt="Xyd Background"
											class="h-[702px] w-auto"
										/>
										<img
											src="/src/assets/images/home-mabelio-bullet.png"
											alt="Bullet"
											class="absolute bottom-56 left-14 z-10 w-[434px]"
										/>
										<img
											src="/src/assets/images/strike-fast.png"
											alt="Strike Fast"
											class="absolute bottom-36 left-1/2 -translate-x-1/2 w-[288px]"
										/>
										<img
											src="/src/assets/images/zevtera-mabelio-logo.png"
											alt="Zevtera Mabelio Logo"
											class="absolute bottom-14 left-1/2 -translate-x-1/2 w-[288px]"
										/>
										<img
											src="/src/assets/images/home-zevtera-bullet-trail.png"
											alt="Bullet Trail"
											class="absolute bottom-0 left-0 w-full"
										/>
									</div>
								</div>
							</div>

							<div
								ref="item2Ref"
								class="absolute top-1/2 left-1/2 w-0 h-0 carousel-item-wrapper"
								style="filter: drop-shadow(0px 3.811px 25.268px #ffffff)"
							>
								<div
									class="carousel-item absolute top-1/2 left-1/2 w-[566px] h-[702px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
									:class="{ 'shadow-xl': activeIndex === 2 }"
								>
									<div class="relative w-full h-full bg-textured overflow-hidden pointer-events-none">
										<img
											src="/src/assets/images/home-xyd-background.png"
											alt="Xyd Background"
											class="h-[702px] w-auto"
										/>
										<p
											class="absolute bottom-28 left-1/2 -translate-x-1/2 text-white text-[48px] leading-[54px] font-bold w-[466px] text-center"
										>
											One dose does it.
										</p>
										<img
											src="/src/assets/images/xyd-logo-white.png"
											alt="Xyd Logo"
											class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[250px]"
										/>
									</div>
								</div>
							</div>
						</div>

						<button
							v-if="activeIndex === 0"
							class="absolute -bottom-[20px] left-16 z-10"
							@click="goToTheLeft"
						>
							<img
								src="/src/assets/images/home-arrow-left-green.png"
								alt="Arrow Left"
								class="w-[84px]"
							/>
						</button>
						<button
							v-else-if="activeIndex === 1"
							class="absolute -bottom-[20px] left-16 z-10"
							@click="goToTheLeft"
						>
							<img
								src="/src/assets/images/home-arrow-left-purple.png"
								alt="Arrow Left"
								class="w-[84px]"
							/>
						</button>
						<button
							v-else
							class="absolute -bottom-[20px] left-16 z-10"
							@click="goToTheLeft"
						>
							<img
								src="/src/assets/images/home-arrow-left-white.png"
								alt="Arrow Left"
								class="w-[84px]"
							/>
						</button>
						<button
							v-if="activeIndex === 0"
							class="absolute -bottom-[20px] right-16 z-10"
							@click="goToTheRight"
						>
							<img
								src="/src/assets/images/home-arrow-right-green.png"
								alt="Arrow Left"
								class="w-[84px]"
							/>
						</button>
						<button
							v-else-if="activeIndex === 1"
							class="absolute -bottom-[20px] right-16 z-10"
							@click="goToTheRight"
						>
							<img
								src="/src/assets/images/home-arrow-right-purple.png"
								alt="Arrow Left"
								class="w-[84px]"
							/>
						</button>
						<button
							v-else
							class="absolute -bottom-[20px] right-16 z-10"
							@click="goToTheRight"
						>
							<img
								src="/src/assets/images/home-arrow-right-white.png"
								alt="Arrow Left"
								class="w-[84px]"
							/>
						</button>
					</div>
				</div>

				<div class="flex flex-col gap-y-2.5 absolute bottom-0 right-0 items-end">
					<div
						class="flex gap-x-6 items-center bg-white rounded-l-[20px] border-2 border-[#195C68] border-r-0 px-2.5 py-[3px] cursor-pointer"
						@click="router.push({ name: 'zevtera-prescribing-information', query: { from: 'home-prescribing-information-button' } })"
					>
						<img
							src="/src/assets/images/prescribing-information-turqoise.png"
							alt="Prescribing Information"
							class="w-10 h-10"
						/>
						<span class="text-xl leading-tight text-[#195C68]"
							>Prescribing<br />
							information</span
						>
						<img
							src="/src/assets/images/chevron-right-turqoise-bg.png"
							alt="Prescribing Information"
							class="w-10 h-10 mr-10 ml-1"
						/>
					</div>
					<img
						src="/src/assets/images/home-advanz-logo.png"
						alt="Home Advanz Logo"
						class="w-[392px]"
					/>
				</div>
			</div>

			<!-- Overlay screen with Get Started button -->
			<div
				ref="overlayScreen"
				class="absolute top-0 left-0 w-full h-full bg-home bg-[#195C68] text-white z-10 flex flex-col items-center justify-center"
			>
				<div class="text-white">
					<div class="absolute top-[18%] left-[26.4%] flex flex-col gap-y-[100px]">
						<div>
							<h2 class="text-[32px] font-extrabold leading-[1.2]">
								We offer a complimentary range of treatments extending<br />
								across the antimicrobial landscape<sup>1-3</sup>
								<span class="text-[40px]"> –</span>
							</h2>
							<p class="text-[24px]">including resistant pathogens outlined in WHO's Bacterial Priority Pathogen list 4</p>
						</div>
						<div class="ml-[100px]">
							<h2 class="text-[32px] font-extrabold leading-[1.2]">
								Putting humanity first - we strive to remove treatment<br />
								barriers and reduce the burden of care
								<span class="text-[40px]"> –</span>
							</h2>
							<p class="text-[24px]">including resistant pathogens outlined in WHO's Bacterial Priority Pathogen list 4</p>
						</div>
						<div class="ml-[200px]">
							<h2 class="text-[32px] font-extrabold leading-[1.2]">
								Forging a different path by providing effective<br />
								treatments with predictable outcomes<sup>5-7</sup>
								<span class="text-[40px]"> –</span>
							</h2>
							<p class="text-[24px]">including resistant pathogens outlined in WHO's Bacterial Priority Pathogen list 4</p>
						</div>
					</div>

					<button
						@click="startEraserAnimation"
						class="absolute bottom-0 px-6 py-3 text-lg bg-white text-primary-turqoise rounded hover:bg-cool-grey transition-colors"
					>
						Get Started
					</button>
				</div>
			</div>

			<!-- Eraser element using an image - moved outside overlay to prevent scaling issues -->
			<div
				ref="eraserContainer"
				class="absolute top-0 left-0 h-screen pointer-events-none z-50"
			>
				<img
					ref="eraser"
					class="h-full object-contain block"
					src="/src/assets/images/A.png"
					alt="Eraser"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

import { gsap } from 'gsap';

import TheFooter from '@/components/TheFooter.vue';
import OurPortfolio from '@/components/home/OurPortfolio.vue';

const router = useRouter();

// Individual item refs
const item0Ref = ref(null);
const item1Ref = ref(null);
const item2Ref = ref(null);

// State variables
const carouselRef = ref(null);
const activeIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const currentX = ref(0);
const rotationAmount = ref(0);
const rotationStep = 120; // Degrees between each item (360 / 3 = 120)

// Refs for animation targets
const eraser = ref(null);
const overlayScreen = ref(null);
const eraserContainer = ref(null);

const xydBackground = ref(null);
const zevteraDetails = ref(null);
const exblifepBackground = ref(null);

const xydButton = ref(null);

const backgroundConfigs = {
	0: {
		exblifepBackground: {
			opacity: 1,
			display: 'block',
		},
		zevteraDetails: {
			opacity: 0,
			display: 'none',
		},
		xydBackground: {
			opacity: 0,
			display: 'none',
		},
	},
	1: {
		exblifepBackground: {
			opacity: 0,
			display: 'none',
		},
		zevteraDetails: {
			opacity: 1,
			display: 'block',
		},
		xydBackground: {
			opacity: 0,
			display: 'none',
		},
	},
	2: {
		exblifepBackground: {
			opacity: 0,
			display: 'none',
		},
		zevteraDetails: {
			opacity: 0,
			display: 'none',
		},
		xydBackground: {
			opacity: 1,
			display: 'block',
		},
	},
};

onMounted(() => {
	// Initialize the overlay screen
	gsap.set(overlayScreen.value, {
		clipPath: 'inset(0 0 0 0)', // Initially visible (0% instead of 100% to see the overlay)
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 40,
		width: '100%',
		height: '100%',
	});

	gsap.set(eraserContainer.value, {
		height: '100vh',
		position: 'absolute',
		top: 0,
		left: 0,
		// display: 'none', // Remove this to see the eraser
	});

	// Set initial 3D transform origin
	gsap.set(carouselRef.value, { transformPerspective: 1000 });

	// Initialize items with their positions
	positionItems();

	// Add resize handler
	window.addEventListener('resize', positionItems);

	gsap.set([zevteraDetails.value, xydBackground.value], {
		opacity: 0,
		display: 'none',
	});
});

// Clean up on unmount
onBeforeUnmount(() => {
	window.removeEventListener('resize', positionItems);
});

// Function to trigger the animation
const startEraserAnimation = () => {
	// Set initial state of eraser container
	gsap.set(eraserContainer.value, {
		left: 0,
		height: '100vh',
		position: 'absolute',
	});

	// Ensure eraser image maintains full height
	gsap.set(eraser.value, {
		height: '100vh',
		objectFit: 'cover',
		display: 'block',
		scale: 1,
	});

	// Create a timeline for the animation sequence
	const tl = gsap.timeline({
		onComplete: () => {
			// Slight delay before hiding the overlay for smoothness
			gsap.set(overlayScreen.value, { display: 'none' }, '+=0.1');
		},
	});

	// 1. Animate the eraser to sweep across the screen
	tl.to(eraserContainer.value, {
		left: '100%',
		duration: 1.4, // Slightly longer for a smooth feel
		ease: 'power4.inOut',
	});

	// 2. Apply blur effect during transition (optional)
	tl.to(
		overlayScreen.value,
		{
			clipPath: 'inset(0 0 0 100%)',
			duration: 1.4,
			ease: 'power4.inOut',
			filter: 'blur(2px)', // Adds a subtle blur effect
		},
		0
	);
};

// Position and scale items in 3D space
const positionItems = () => {
	const itemRefs = [item0Ref.value, item1Ref.value, item2Ref.value];
	const totalItems = 3;

	for (let index = 0; index < totalItems; index++) {
		const angle = ((index - activeIndex.value) * rotationStep + rotationAmount.value) % 360;
		const radian = (angle * Math.PI) / 180;

		// Calculate position (circular arrangement but with less radius to keep items closer)
		const radius = 155;
		const x = Math.sin(radian) * radius;

		// Adjust z position to keep items partially visible
		const z = Math.cos(radian) * radius * 0.2;

		// Adjust y position to move back elements down
		const y = Math.cos(radian) * radius * 0.2;

		// Calculate scale based on z position (front is larger)
		const scale = mapRange(z, -radius * 0.2, radius * 0.2, 0.9, 1.17);

		// Calculate offset to create overlapping effect
		const offsetX = Math.sin(radian) * 180;

		// Calculate z-index (items in front have higher z-index)
		const zIndex = Math.round(mapRange(z, -radius * 0.6, radius * 0.6, 10, 20));

		const colors = ['#1f17f6', '#fcc100', '#ffffff'];
		const filter = index === activeIndex.value ? `drop-shadow(0px 3.811px 25.268px ${colors[index]}` : 'none';

		if (itemRefs[index]) {
			gsap.to(itemRefs[index], {
				x: x + offsetX,
				y: -y,
				z,
				scale,
				rotationY: 0, // Always face front
				duration: isDragging.value ? 0.1 : 1,
				ease: 'power4.out',
				filter,
				zIndex,
			});
		}
	}
};

// Map a value from one range to another
const mapRange = (value, inMin, inMax, outMin, outMax) => {
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Drag handlers
const startDrag = (e) => {
	isDragging.value = true;
	startX.value = e.clientX || e.touches[0].clientX;
	currentX.value = startX.value;
};

const onDrag = (e) => {
	if (!isDragging.value) return;

	e.preventDefault();
	const clientX = e.clientX || e.touches?.[0]?.clientX || currentX.value;
	const deltaX = clientX - currentX.value;
	currentX.value = clientX;

	// Update rotation amount based on drag distance
	rotationAmount.value += deltaX * 0.5;

	// Position items based on the new rotation
	positionItems();
};

const endDrag = () => {
	if (!isDragging.value) return;

	isDragging.value = false;

	const normalizedRotation = rotationAmount.value % 360;
	const steps = Math.round(normalizedRotation / rotationStep);
	const newIndex = (activeIndex.value - steps) % 3;
	activeIndex.value = (newIndex + 3) % 3; // Ensure positive index
	rotationAmount.value = 0;

	positionItems();
	animateBackground(backgroundConfigs[activeIndex.value]);
};

const goToTheLeft = () => {
	goToSlide((activeIndex.value + 1) % 3);
};

const goToTheRight = () => {
	goToSlide((activeIndex.value - 1 + 3) % 3);
};

// Go to a specific slide
const goToSlide = (index) => {
	activeIndex.value = index;
	rotationAmount.value = 0;
	positionItems();
	animateBackground(backgroundConfigs[index]);
};

const animateBackground = (config) => {
	Object.entries(config).forEach(([key, { opacity, display }]) => {
		const element = {
			exblifepBackground,
			zevteraDetails,
			xydBackground,
		}[key];

		gsap.to(element.value, {
			opacity,
			display,
		});
	});
};
</script>

<style scoped>
.carousel {
	perspective: 1000px;
	transform-style: preserve-3d;
	margin-top: -24px;
}

.carousel-item {
	transform-style: preserve-3d;
	backface-visibility: hidden;
	transform: translate(-50%, -50%);
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	/* filter: drop-shadow(0px 3.811px 95.268px #1f17f6); */
}
</style>
