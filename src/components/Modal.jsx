import React from 'react';

const Modal = () => {
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <h3 className="font-bold text-lg text-green-700">Assalamu Alaikum</h3>
                    <p className="py-4 text-green-900">Thanks for your Purchase</p>
                    <div className="flex flex-col justify-center items-center">
                        <form method="dialog">
                            <button className="btn btn-success text-white text-sm">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;