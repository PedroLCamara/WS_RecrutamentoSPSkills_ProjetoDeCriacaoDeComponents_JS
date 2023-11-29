import logo from './logo.svg';
import './App.css';
import Modal from "./components/modal";
import {useState} from "react";
import Toast from "./components/toast/toast";

function App() {
    const [showModal, setShowModal] = useState(false)
    const [showToast, setShowToast] = useState(false);
    return (
        <div id={"screen-container"}>
            {/*<button id={'modal-btn'} onClick={(ev) => {*/}
            {/*    setShowModal(true)*/}
            {/*}}>Abrir modal*/}
            {/*</button>*/}
            <button id={'modal-btn'} onClick={(ev) => {
                setShowToast(true)
            }}>Mostar Toast
            </button>
            <Modal show={showModal} size={'big'} onClose={(ev) => {
                setShowModal(false)
            }}>
                <h1>Título</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi non justo convallis
                    cursus. Maecenas sit amet dapibus enim. In mattis ornare eleifend. Sed dui lacus, rutrum a fringilla
                    nec, mattis et dui. Quisque a nulla faucibus, condimentum magna at, euismod dolor. Praesent sit amet
                    commodo ante. Vestibulum nibh neque, tempor at malesuada a, rhoncus et nunc. Suspendisse posuere
                    eleifend metus eu condimentum. Nulla porta suscipit dolor et ullamcorper. Pellentesque metus odio,
                    pretium dapibus purus vel, volutpat lacinia lorem. Nulla semper porttitor auctor. Nam lacinia, leo
                    vel venenatis mattis, nunc sem laoreet neque, sit amet venenatis dui felis a erat. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    Sed et turpis lacinia, condimentum turpis et, ultricies sapien. Mauris cursus maximus ullamcorper.
                    Ut sed iaculis dolor, ut consectetur nibh. Ut eleifend mollis pharetra. Aenean varius maximus ligula
                    eget semper. Aenean ullamcorper quis nunc ut euismod. Mauris et iaculis metus. Donec non hendrerit
                    est. Duis efficitur, nunc at tristique ultricies, leo quam finibus mauris, eu hendrerit nisl odio eu
                    justo. Quisque aliquet eros a odio euismod, in ornare metus semper. Sed tincidunt a magna id
                    malesuada. Vestibulum nisl enim, fermentum ut pulvinar vitae, convallis eget lectus.

                    Fusce quis porttitor risus. Etiam non ex lectus. In non dui tempus, aliquam augue id, imperdiet
                    metus. Vestibulum pretium ligula vel leo aliquam, a placerat nibh bibendum. Etiam egestas eleifend
                    nisl nec tincidunt. Sed tincidunt efficitur sem in scelerisque. Integer non velit vulputate,
                    pharetra erat sit amet, lobortis tellus. Curabitur sit amet sodales ante. Quisque iaculis eget odio
                    sit amet sollicitudin. Quisque eleifend nulla sed urna blandit, mollis scelerisque lorem interdum.
                    Donec quis risus quis magna faucibus congue. In efficitur eu odio ultrices imperdiet. Integer ac sem
                    eu lectus bibendum efficitur lacinia ut lacus. Suspendisse sollicitudin quis elit non fermentum. In
                    arcu lectus, pretium in rutrum vel, fermentum ac eros.

                    Nullam dui leo, bibendum vitae velit vel, fermentum ornare mauris. Sed porttitor quam nec risus
                    elementum, vel fermentum purus cursus. Nunc in eleifend diam. Suspendisse sit amet elit fermentum,
                    aliquam turpis quis, blandit nisi. Quisque in lobortis lorem. Suspendisse dolor lacus, fringilla ut
                    lacus ullamcorper, condimentum vehicula lacus. Vivamus nec luctus velit. Sed pretium tempus eros in
                    scelerisque. Morbi accumsan malesuada commodo. Ut id eros ornare, ullamcorper felis in, dapibus
                    velit. Curabitur vitae ligula odio. Proin nec lorem enim. Ut sit amet purus vel urna dapibus
                    accumsan. Mauris maximus egestas est, sed finibus tortor dapibus eget.

                    Mauris purus sem, efficitur ut sem ac, commodo pretium ex. Nam quis mi a enim faucibus malesuada.
                    Nulla fermentum dui bibendum felis vehicula tempor. Nulla sollicitudin pulvinar metus quis rutrum.
                    Vestibulum felis nunc, lacinia quis lorem ac, aliquam vestibulum purus. Etiam finibus vestibulum
                    nibh in auctor. Cras posuere, ante in pharetra laoreet, diam ipsum malesuada dui, quis tincidunt
                    ipsum erat vel lacus.

                    Integer arcu metus, volutpat at diam ac, scelerisque tempus sem. Quisque maximus malesuada nibh, ut
                    dapibus risus pharetra et. Suspendisse potenti. Nam enim dui, rutrum pretium ullamcorper et, aliquet
                    sit amet augue. Etiam varius accumsan egestas. Donec suscipit dignissim lorem, quis pellentesque est
                    tincidunt vitae. Curabitur id pharetra quam, vitae ornare massa. Nullam eget ullamcorper turpis, sit
                    amet porttitor odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer dolor
                    turpis, rhoncus sit amet gravida sit amet, rhoncus vitae purus. Maecenas consectetur sagittis
                    suscipit. Praesent luctus interdum velit in aliquam. Suspendisse dui nisi, pretium quis erat
                    pretium, rhoncus scelerisque sem.

                    Morbi arcu urna, sagittis vitae efficitur at, lobortis tempus dolor. Integer sit amet dolor
                    consectetur, congue risus ac, commodo mi. Maecenas dapibus convallis diam, in facilisis mauris porta
                    at. Donec metus urna, molestie ac nisi sit amet, tempus tincidunt diam. Mauris quis nunc eu ante
                    interdum aliquam id ultrices nulla. Aliquam et risus ac massa malesuada tincidunt ac non justo. Sed
                    dignissim aliquet mattis. Mauris id elit accumsan, aliquam velit auctor, malesuada leo.

                    Sed egestas, ex eget blandit convallis, orci metus finibus dolor, non facilisis nunc quam id est.
                    Nullam quis convallis lorem. Aliquam ac est sit amet augue mattis ullamcorper sed tempor libero. In
                    commodo imperdiet lorem, scelerisque semper nisl sodales et. Nam tristique vulputate massa, sit amet
                    efficitur est semper eget. Pellentesque odio massa, tempor vitae sollicitudin non, bibendum sit amet
                    odio. Vivamus consequat non lorem ac aliquet. Proin vehicula justo vitae bibendum scelerisque. Duis
                    euismod sapien molestie dui dictum ornare. Nunc ut nisi et augue egestas porttitor ac quis purus.
                    Proin tincidunt vitae justo at congue. Nunc molestie nulla est, in pretium nibh porttitor mattis.
                    Nulla vel auctor ex, et condimentum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris rhoncus sapien tortor, id auctor sapien volutpat eget. Aliquam commodo sem a orci consequat,
                    sed faucibus ante maximus.

                    Duis ut lectus felis. Vestibulum aliquam magna non tincidunt aliquam. Quisque tellus arcu, facilisis
                    dictum sagittis vel, pulvinar non ipsum. Sed at eros eget elit vulputate luctus. Donec sem nibh,
                    faucibus non porttitor hendrerit, fermentum et felis. Morbi ut ante ut ipsum blandit bibendum eu id
                    orci. Etiam dapibus mauris neque, at commodo erat malesuada eu.

                    Nam leo augue, commodo in congue et, ultrices posuere odio. Maecenas lectus neque, semper sit amet
                    lorem eget, rhoncus ultricies felis. Sed ultrices, sapien vel vulputate tempus, augue sapien semper
                    purus, ac ullamcorper arcu libero malesuada risus. Etiam eros ex, laoreet eget purus eu, scelerisque
                    dictum lectus. Etiam a suscipit elit, vitae hendrerit eros. Duis sed neque feugiat, tincidunt orci
                    eget, tempor lectus. Aliquam erat volutpat. Etiam efficitur leo nibh, sed tristique orci
                    sollicitudin eleifend. Ut nisl tortor, bibendum quis massa eu, laoreet fermentum nibh. Pellentesque
                    bibendum cursus turpis, non interdum libero dictum vehicula.</p>
            </Modal>
            <Toast
                onClose={(ev) => {
                    setShowToast(false)
                }}
                show={showToast}
                color={'red'}
                title={"Erro"}
                message={"Um erro acoteceu por conta de... Lorem Ipsum Dolor Sit Amet"}
            />
        </div>
    );
}

export default App;
